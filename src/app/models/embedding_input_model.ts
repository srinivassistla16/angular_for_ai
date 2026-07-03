export class DocList {
    constructor(public docs: string[] ) {}
}

export class DocSearchModel {
    constructor(public docsList: string[], public query: string | null) {}
}