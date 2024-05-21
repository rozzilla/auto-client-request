import { type FastifyReply, type FastifyPluginAsync } from 'fastify'
import { type GetHeadersOptions } from '@platformatic/client'

declare namespace backend {
  export type Backend = {
    getCheck(req?: GetCheckRequest): Promise<GetCheckResponses>;
    postExample(req?: PostExampleRequest): Promise<PostExampleResponses>;
  }
  export interface BackendOptions {
    url: string
  }
  export const backend: BackendPlugin;
  export { backend as default };
  export interface FullResponse<T, U extends number> {
    'statusCode': U;
    'headers': Record<string, string>;
    'body': T;
  }

  export type GetCheckRequest = {
    query?: {
      'ping'?: string;
    }
  }

  export type GetCheckResponseOK = {
    'status': string;
    'ping'?: string;
  }
  export type GetCheckResponses =
    FullResponse<GetCheckResponseOK, 200>

  export type PostExampleRequest = {
    body: {
      'num1': number;
      'num2': number;
      'text'?: string;
    }
  }

  export type PostExampleResponseOK = {
    'value': string;
  }
  export type PostExampleResponses =
    FullResponse<PostExampleResponseOK, 200>

}

type BackendPlugin = FastifyPluginAsync<NonNullable<backend.BackendOptions>>

declare module 'fastify' {
  interface ConfigureBackend {
    getHeaders(req: FastifyRequest, reply: FastifyReply, options: GetHeadersOptions): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    configureBackend(opts: ConfigureBackend): unknown
  }

  interface FastifyRequest {
    'backend': backend.Backend;
  }
}

declare function backend(...params: Parameters<BackendPlugin>): ReturnType<BackendPlugin>;
export = backend;
