import type {DashboardData,DocumentItem} from '../types';
export const docs:DocumentItem[]=[
{id:'DOC-0142',patient:'PAC-042',code:'PAC-042',type:'Receita',status:'revisao',confidence:62,uploadedAt:'Hoje, 10:12',updatedAt:'Há 12 min',priority:true,reason:'Alto risco · insulina',queueTime:'12 min'},
{id:'DOC-0143',patient:'PAC-019',code:'PAC-019',type:'Exame',status:'revisao',confidence:74,uploadedAt:'Hoje, 10:04',updatedAt:'Há 8 min',priority:true,reason:'Resultado crítico',queueTime:'8 min'},
{id:'DOC-0144',patient:'PAC-067',code:'PAC-067',type:'Autorização',status:'revisao',confidence:78,uploadedAt:'Hoje, 09:58',updatedAt:'Há 5 min',priority:true,reason:'Atendimento urgente',queueTime:'5 min'},
{id:'DOC-0145',patient:'PAC-103',code:'PAC-103',type:'Receita',status:'processando',confidence:91,uploadedAt:'Hoje, 09:44',updatedAt:'Há 2 min'},
{id:'DOC-0146',patient:'PAC-081',code:'PAC-081',type:'Exame',status:'concluido',confidence:98,uploadedAt:'Hoje, 09:31',updatedAt:'Concluído'}];
export const dashboard:DashboardData={processed:1284,pending:28,urgent:3,successRate:98.2,volume:[['04h',86],['05h',132],['06h',114],['07h',189],['08h',243],['09h',258],['10h',262]].map(([hour,value])=>({hour:String(hour),value:Number(value)})),profile:[{name:'Receitas',value:591,color:'#3b82f6'},{name:'Exames',value:411,color:'#22c7d9'},{name:'Autorizações',value:282,color:'#94a3b8'}],priority:docs.slice(0,3)};
