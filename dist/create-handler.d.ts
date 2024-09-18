import type { NextApiRequest, NextApiResponse } from 'next';
import { Methods, Params } from './decorator/api-decorator';
import { NextRequest, NextResponse } from 'next/server';
export declare const createHandler: <T>(target: new () => T) => Partial<Record<Methods, (req: NextRequest, p: Params) => Promise<NextResponse<unknown>>>>;
export declare const createApiRouteHandler: <T>(target: new () => T) => (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
