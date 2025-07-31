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

//##########################
//# HTTP Response Handling #
//##########################

export type CreateResponse = {
    Key: string;
    Message: string;
}

export type GetAllResponse = {
    AllItems: ListItemDictionary;
    Message: string;
}

export type GetSingleResponse = {
    Item: ListItem;
    Message: string;
}