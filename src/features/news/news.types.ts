export interface NewsResponse {
  totalItems: number;
  endIndex: number;
  startIndex: number;
  itemsPerPage: number;
  items: News[];
}

export interface News {
  essay: any[];
  place_of_publication: string;
  start_year: number;
  publisher?: string;
  county: string | undefined[];
  edition?: string;
  frequency?: string;
  url: string;
  id: string;
  subject: string[];
  city: string[];
  language: string[];
  title: string;
  holding_type: string[];
  end_year: number;
  alt_title: string[];
  note: string[];
  lccn: string;
  state: string[];
  place: string[];
  country: string;
  type: string;
  title_normal: string;
  oclc: string;
}

export type NewsStatus = "idle" | "loading" | "failed" | "success";

export type NewsState = {
  news: News[];
  status: NewsStatus;
  error: string | null;
  viewId: string | null;
  filter: string | null;
};
