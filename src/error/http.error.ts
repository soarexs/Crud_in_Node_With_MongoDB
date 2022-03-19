export interface IHttpError { 
    status: number, 
    message: string
}

export class HttpError extends Error implements IHttpError { 
    public readonly status: number
    
    constructor(status: number, message: string) { 
        super(message)
        this.status = status
    }
}