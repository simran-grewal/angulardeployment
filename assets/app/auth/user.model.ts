// this i how user model looks like

export class user{
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string){}////? means optional perameter
}