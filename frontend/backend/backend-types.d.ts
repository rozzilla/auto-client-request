export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type GetCheckRequest = {
  'ping'?: string;
}

export type GetCheckResponseOK = {
  'status': 'OK' | 'KO';
  'ping'?: string;
}
export type GetCheckResponses =
  GetCheckResponseOK

export type PostExampleRequest = {
  'num1': number;
  'num2': number;
  'text'?: string;
}

export type PostExampleResponseOK = {
  'value': string;
}
export type PostExampleResponses =
  PostExampleResponseOK



export interface Backend {
  setBaseUrl(newUrl: string) : void;
  getCheck(req?: GetCheckRequest): Promise<GetCheckResponses>;
  postExample(req?: PostExampleRequest): Promise<PostExampleResponses>;
}
type PlatformaticFrontendClient = Omit<Backend, 'setBaseUrl'>
export default function build(url: string): PlatformaticFrontendClient
