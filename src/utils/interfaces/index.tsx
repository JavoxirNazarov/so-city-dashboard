export interface IPartner {
  cancel_time: string;
  category: "common" | "care" | "delivery";
  cell_render_type: string;
  end_workday: number;
  icon: any;
  id: number;
  img_url: string;
  is_active: boolean;
  minimal_price: number;
  name: string;
  name_ru: string;
  orders_at_wui: number;
  partner_render_type: "regular" | "with_images" | "cleaning";
  partner_title: boolean;
  partner_title_ru: boolean;
  phone: string;
  render_order: number;
  secret_key: string;
  shop_code: string;
  start_workday: number;
  svc_categories: any;
  tg_bot: string;
  type_of: string;
  user_penalty: any;
  work_unit_interval: number;
  workdays: string;
}
