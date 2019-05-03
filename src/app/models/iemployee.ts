export class IEmployee {
  public id: number;
  public first_name: string;
  public avatar?: string;
  public avatar_url?: string;
  public last_name: string;
  public middle_name: string;
  public birthday: string;
  public facilities: string;
  public specialization: string;
  public is_staff: boolean;
  public is_active?: boolean;
  public contact_email: string;
  public contact_phone: string;
  public contacts: string;
  public code_examples: string;
  public work_starts_at: string;
  public work_ends_at: string;
  public skills: Array<any>;

  constructor(fields: Partial<IEmployee>) {
    Object.assign(this, fields);
  }
}
