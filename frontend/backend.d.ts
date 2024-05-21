import { type FastifyReply, type FastifyPluginAsync } from 'fastify'
import { type GetHeadersOptions } from '@platformatic/client'

declare namespace backend {
  export type Backend = {
    getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
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

  export type GetExampleRequest = {
    query?: {
      'hi'?: string;
    }
  }

  export type GetExampleResponseOK = {
    'hello': string;
  }
  export type GetExampleResponses =
    FullResponse<GetExampleResponseOK, 200>

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
