export declare module FDUModule {
    let FDU: ForumDUtils;

    export class ForumDUtils {
        /**
         * Проверяет, разрешён ли запуск скрипта
         */
        check(): Promise<boolean>;

        /**
         * Ошибка, сообщающая о невозможности запуска скрипта
         */
        error(): Error;

    }
}