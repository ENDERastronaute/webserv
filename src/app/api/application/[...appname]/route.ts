import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const appnameResult = req.nextUrl.pathname.match(/\/api\/application\/([^/]+)/i);
    const routeResult = req.nextUrl.pathname.match(/\/api\/application\/[^/]+\/(.*)/i);
    
    const appname = appnameResult ? appnameResult[1] : '';
    const route = routeResult ? routeResult[1] : '';
    
    try {
        const handler = route ? await import(`../../../../../apps/${appname}/api/${route}/route.ts`) : await import(`../../../../../apps/${appname}/api/route.ts`);

        if (handler && typeof handler[req.method] === 'function') {
            return handler[req.method](req);
        }
        else {
            return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
        }
    
    }
    catch (e) {
        return NextResponse.json({ error: `Internal server error, ${e}` }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    const appnameResult = req.nextUrl.pathname.match(/\/api\/application\/([^/]+)/i);
    const routeResult = req.nextUrl.pathname.match(/\/api\/application\/[^/]+\/(.*)/i);
    
    const appname = appnameResult ? appnameResult[1] : '';
    const route = routeResult ? routeResult[1] : '';
    
    try {
        const handler = route ? await import(`../../../../../apps/${appname}/api/${route}/route.ts`) : await import(`../../../../../apps/${appname}/api/route.ts`);

        if (handler && typeof handler[req.method] === 'function') {
            return handler[req.method](req);
        }
        else {
            return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
        }
    
    }
    catch (e) {
        return NextResponse.json({ error: `Internal server error, ${e}` }, { status: 500 })
    }
}

export async function PATCH(req: NextRequest) {
    const appnameResult = req.nextUrl.pathname.match(/\/api\/application\/([^/]+)/i);
    const routeResult = req.nextUrl.pathname.match(/\/api\/application\/[^/]+\/(.*)/i);
    
    const appname = appnameResult ? appnameResult[1] : '';
    const route = routeResult ? routeResult[1] : '';
    
    try {
        const handler = route ? await import(`../../../../../apps/${appname}/api/${route}/route.ts`) : await import(`../../../../../apps/${appname}/api/route.ts`);

        if (handler && typeof handler[req.method] === 'function') {
            return handler[req.method](req);
        }
        else {
            return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
        }
    
    }
    catch (e) {
        return NextResponse.json({ error: `Internal server error, ${e}` }, { status: 500 })
    }
}

export async function PUT(req: NextRequest) {
    const appnameResult = req.nextUrl.pathname.match(/\/api\/application\/([^/]+)/i);
    const routeResult = req.nextUrl.pathname.match(/\/api\/application\/[^/]+\/(.*)/i);
    
    const appname = appnameResult ? appnameResult[1] : '';
    const route = routeResult ? routeResult[1] : '';
    
    try {
        const handler = route ? await import(`../../../../../apps/${appname}/api/${route}/route.ts`) : await import(`../../../../../apps/${appname}/api/route.ts`);

        if (handler && typeof handler[req.method] === 'function') {
            return handler[req.method](req);
        }
        else {
            return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
        }
    
    }
    catch (e) {
        return NextResponse.json({ error: `Internal server error, ${e}` }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest) {
    const appnameResult = req.nextUrl.pathname.match(/\/api\/application\/([^/]+)/i);
    const routeResult = req.nextUrl.pathname.match(/\/api\/application\/[^/]+\/(.*)/i);
    
    const appname = appnameResult ? appnameResult[1] : '';
    const route = routeResult ? routeResult[1] : '';
    
    try {
        const handler = route ? await import(`../../../../../apps/${appname}/api/${route}/route.ts`) : await import(`../../../../../apps/${appname}/api/route.ts`);

        if (handler && typeof handler[req.method] === 'function') {
            return handler[req.method](req);
        }
        else {
            return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
        }
    
    }
    catch (e) {
        return NextResponse.json({ error: `Internal server error, ${e}` }, { status: 500 })
    }
}