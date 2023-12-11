export type movieProps = {
    movieDetails: {
        id: string;
        movie: string;
        likes: string;
        description: string;
        actors: Array<string>;
        link: string;
        isLiked: boolean;
    };
    updateSelectedMovie: Function;
    updateLike: Function;
    selectMovie: Function;
};

export type movieDescriptionProps = {
    resetAdvertisement: boolean;
    advertisement: object;
    movieDetails: {
        id: string;
        movie: string;
        likes: string;
        description: string;
        actors: Array<string>;
        link: string;
        isLiked: boolean;
    };
    updateLike: Function;
    onclick: Function;
    limit: number;
    setAdStatus: Function;
    setResetAdvertisement: Function;
};

export type teaserProps = {
    id: number;
    title: string;
    videoSrc: string;
    onclick?: any;
    videoRef?: HTMLVideoElement;
    adStatus?: boolean;
    limit?: number;
    videoStatus?: boolean;
};

export type layoutProps = {
    children: React.ReactNode;
};

export type movieDetails = {
    id: string;
    movie: string;
    likes: string;
    description: string;
    actors: Array<string>;
    link: string;
    isLiked: boolean;
};

export type advertisementCard = {
    imageUrl: string;
    alt: string;
    limit: number;
    title: string;
    size: string;
};

export type inputProps = {
    label?: string;
    type: string;
    register: object;
    name: string;
    variant: string;
    theme?: string;
    placeHolder?: string;
    border?: string;
    maxLength?: number;
    error?: any;
};

export type buttonProps = {
    label: string;
    size?: string;
    disabled: boolean;
    color: string;
    onClick: Function;
    dataTestId?: string
};