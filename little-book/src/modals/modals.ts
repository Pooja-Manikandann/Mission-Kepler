export type checkBoxProps = {
    id: string,
    name: string,
    label: string,
    value: boolean,
    onChange: any,
}

export type inputProps = {
    type: string,
    placeholder: string,
    handleEnter?: any,
    maxlength?: number,
    value?: string,
    onChange?: any,
    variant: string,
    darkTheme?: boolean,
}

export type buttonProps = {
    label: string,
    type: string,
    onClick: any,
}

export type blogProps = {
    title: string,
    details: string,
    type: string,
    handleBlogClick?: any,
    active: boolean,
    darkTheme: boolean,
}

export type blogType = {
    title: string,
    details: string,
    type: string,
    photo: string,
    updateBlog?: any,
    isEditView?: boolean,
    setIsEditView?: any,
}

export type userType = {
    id: number,
    name: string,
    username: string,
    email: string, 
    photo: string, 
    address: object,
    phone: string,
    website: string,
    company: object,
}

export type profileCardtype = {
    name: string,
    username: string,
    photo: string,
    darkTheme: boolean,
}

export type NewBlogFormProps = {
    updateBlogDetails: any,
}

export type filterType = {
    id: string, 
    name: string,
    value: boolean,
    label: string,
}