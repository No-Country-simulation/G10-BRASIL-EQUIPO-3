export type Status='processando'|'pendente'|'revisao'|'concluido'|'erro';
export interface DocumentItem { id:string; patient:string; code:string; type:string; status:Status; confidence:number; uploadedAt:string; updatedAt:string; priority?:boolean; reason?:string; queueTime?:string; }
export interface DashboardData { processed:number; pending:number; urgent:number; successRate:number; volume:{hour:string; value:number}[]; profile:{name:string; value:number; color:string}[]; priority:DocumentItem[]; }
