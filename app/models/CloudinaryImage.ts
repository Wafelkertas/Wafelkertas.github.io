export interface CloudinaryImage {
    total_count: number;
    time:        number;
    resources:   Resource[];
}

export interface Resource {
    asset_id:       string;
    public_id:      string;
    folder:         Folder;
    filename:       string;
    format:         Format;
    version:        number;
    resource_type:  ResourceType;
    type:           Type;
    created_at:     Date;
    uploaded_at:    Date;
    bytes:          number;
    backup_bytes:   number;
    width:          number;
    height:         number;
    aspect_ratio:   number;
    pixels:         number;
    pages:          number;
    url:            string;
    secure_url:     string;
    status:         Status;
    access_mode:    AccessMode;
    access_control: null;
    etag:           string;
    created_by:     EdBy;
    uploaded_by:    EdBy;
}

export enum AccessMode {
    Public = "public",
}

export interface EdBy {
    access_key:  string;
    custom_id:   CustomID;
    external_id: ExternalID;
}

export enum CustomID {
    RocketShidqiGmailCOM = "rocket.shidqi@gmail.com",
}

export enum ExternalID {
    A4E479Cff8C3766Bf701Acda736C9D = "a4e479cff8c3766bf701acda736c9d",
}

export enum Folder {
    Pingo = "pingo",
    Tanmania = "tanmania",
}

export enum Format {
    Webp = "webp",
}

export enum ResourceType {
    Image = "image",
}

export enum Status {
    Active = "active",
}

export enum Type {
    Upload = "upload",
}
