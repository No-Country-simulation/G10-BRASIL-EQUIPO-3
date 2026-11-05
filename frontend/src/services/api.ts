import {dashboard,docs} from '../mocks/data';
import type {DashboardData,DocumentItem} from '../types';
const BASE_URL=import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
const USE_MOCK=import.meta.env.VITE_USE_MOCK !== 'false';
let mockDocs=[...docs];
let mockSettings={threshold:80,autoUrgent:true,requireRejectReason:true};
const wait=()=>new Promise(r=>setTimeout(r,220));
async function request<T>(path:string, options:RequestInit={}):Promise<T>{
 if(USE_MOCK){
  await wait();
  if(path==='/dashboard') return {...dashboard,priority:mockDocs.filter(d=>d.priority||d.status==='revisao')} as T;
  if(path==='/documents') return [...mockDocs] as T;
  if(path==='/settings' && (!options.method || options.method==='GET')) return {...mockSettings} as T;
  return {} as T;
 }
 const res=await fetch(`${BASE_URL}${path}`,{headers:{...(options.body instanceof FormData?{}:{'Content-Type':'application/json'}),...options.headers},...options});
 if(!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
 return res.status===204 ? undefined as T : res.json();
}
export const api={
 getDashboard:()=>request<DashboardData>('/dashboard'),
 getDocuments:()=>request<DocumentItem[]>('/documents'),
 getDocument:async(id:string)=>{if(USE_MOCK){await wait(); return mockDocs.find(d=>d.id===id) || mockDocs[0];} return request<DocumentItem>(`/documents/${id}`)},
 uploadDocuments:async(files:File[])=>{if(USE_MOCK){await wait(); const now=new Date().toLocaleString('pt-BR'); const created=files.map((f,i)=>({id:`DOC-${String(Date.now()+i).slice(-6)}`,patient:'Paciente sintético',code:`ARQ-${String(i+1).padStart(3,'0')}`,type:'Aguardando classificação',status:'pendente' as const,confidence:0,uploadedAt:now,updatedAt:now})); mockDocs=[...created,...mockDocs]; return created;} const fd=new FormData();files.forEach(f=>fd.append('files',f));return fetch(`${BASE_URL}/documents/upload`,{method:'POST',body:fd}).then(async r=>{if(!r.ok)throw new Error(`API ${r.status}`);return r.json()});},
 review:async(id:string,action:'approve'|'reject',notes:string)=>{if(USE_MOCK){await wait(); mockDocs=mockDocs.map(d=>d.id===id?{...d,status:action==='approve'?'concluido':'erro',updatedAt:new Date().toLocaleString('pt-BR')}:d);return;} return request(`/documents/${id}/review`,{method:'POST',body:JSON.stringify({action,notes})})},
 getSettings:()=>request<typeof mockSettings>('/settings'),
 saveSettings:async(value:typeof mockSettings)=>{if(USE_MOCK){await wait();mockSettings={...value};return mockSettings;}return request('/settings',{method:'PUT',body:JSON.stringify(value)})}
};
