//######################
//# Object Definitions #
//######################

export type ListItem = {
    Label: string;
    Description: string;
    DueDate: string;
    IsCompleted: boolean;
}

export type ListItemDictionary = {
    [Key: string]: ListItem;
}

export type DictionaryEntry = {
    key: string,
    item: ListItem,
}

export type GlobalEmitPayload<T = any> = {
    data: T,
    type: GlobalEmitType,
} 

//#########
//# Enums #
//#########

export enum GlobalEmitType {
    AddItem,
    ViewInfo,
    Delete,
    ToggleCompleted,
    SaveChanges
}

//##########################
//# HTTP Response Handling #
//##########################

export type BaseResponse = {
    Message: string;
}

export type CreateResponse = BaseResponse & {
    Key: string;
}

export type GetAllResponse = BaseResponse & {
    AllItems: ListItemDictionary;
}

export type GetSingleResponse = BaseResponse & {
    Item: ListItem;
}
