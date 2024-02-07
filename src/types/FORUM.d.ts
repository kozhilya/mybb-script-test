export type MybbEditor = {
    settings: MybbEditorSettings;
    [key: string]: MybbEditorTag | MybbEditorSettings;
}

export class MybbEditorTag {
    /**
     * Название кнопки.
     */
    name: string;

    /**
     * Функция, которая будет вызвана при нажатии кнопки.
     */
    onclick: () => void;
}

export type MybbEditorSettings = {
    autofocus: string
}

export class MybbTopic {
    /**
     * Тема сообщения
     */
    subject: string;

    /**
     * Флаг закрытия
     * @type "0"|"1"
     */
    closed: string;

    /**
     * Количество ответов в теме
     */
    num_replies: string;

    /**
     * Количество просмотров темы
     */
    num_views: string;

    /**
     * ID форума
     */
    forum_id: string;
    
    /**
     * Имя форума
     */
    forum_name: string;
    
    /**
     * Список модераторов форума, ключ - ID пользователя, значение - имя модератора
     */
    moderators: {
        [key in string]: string
    };
    
    /**
     * Объект языков
     */
    language: {
        share_legend: string
    };
}

export class MYBB_vsc {
    cH: any;
    RG: { [key: string]: MYBB_vsc_item };
    checkHost: (hostingItem: MYBB_vsc_item, input: string) => boolean;
    clickHost: (element: HTMLAnchorElement) => void;
    parse: () => void;
    isLink: (input: string) => boolean;
    message: (html: string) => void;
    reInit: () => void;
}

type MYBB_vsc_item = {
    l: "0" | "1";
    t: string;
    x: RegExp;
    nf: string;
}