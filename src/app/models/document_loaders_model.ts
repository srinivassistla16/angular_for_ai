export class DocumentFile {
    constructor(public document_file_name: string | null)  {}
}
export class DocumentFileWithPageNo {
    constructor(public document_file_name: string | null, public page_no : number | null = 0)  {}
}