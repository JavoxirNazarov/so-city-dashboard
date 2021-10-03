export interface IPartner {
  cancel_time: string;
  category: "common" | "care" | "delivery";
  cell_render_type: string;
  end_workday: string;
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
  start_workday: string;
  svc_categories: any;
  tg_bot: string;
  type_of: string;
  user_penalty: any;
  work_unit_interval: number;
  workdays: string;
}

export interface INewPartner {
  name: string;
  title: string;
  phone: string;
  start_workday: string;
  end_workday: string;
  work_unit_interval: number;
  workdays: string;
  tg_bot: string;
  render_type: string;
  category: string;
  shop_code: string;
}

export interface IServices {
  category_id: number[];
  delay_before_order: number;
  description_of_svc: string;
  id: number;
  image_url: string;
  is_asap: boolean;
  is_main: boolean;
  minimal_price: number;
  name_of_svc: string;
  name_of_svc_ru: string;
  partner_id: number;
  price: number;
  price_info: null;
  service_time: null;
  time_cells: any[];
  time_of_delivery: number;
  time_required: number;
  what_includes_info: string | null;
}
