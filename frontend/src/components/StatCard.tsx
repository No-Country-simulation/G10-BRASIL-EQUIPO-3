import type {LucideIcon} from 'lucide-react';
import {Link} from 'react-router-dom';

interface Props {
  label: string;
  value: string;
  detail?: string;
  Icon: LucideIcon;
  tone?: 'blue' | 'amber' | 'pink' | 'green';
  to?: string;
}

export function StatCard({label, value, detail, Icon, tone = 'blue', to}: Props) {
  const body = (
    <>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        {detail && <em className={tone}>{detail}</em>}
      </div>
      <Icon className={tone} size={21} />
    </>
  );
  return to ? (
    <Link to={to} className="card stat clickable">
      {body}
    </Link>
  ) : (
    <div className="card stat">{body}</div>
  );
}
