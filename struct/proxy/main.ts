interface Subject {
    request(): void;
}

/**
 * コアのビジネスロジック
 * Proxyは、RealSubjectのコードを変更せずに問題解消できる。
 */
class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: リクエストを処理中。');
    }
}

class SubjectProxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    /**
     * Proxyパターンの最も一般的な用途は、遅延ロード、キャッシング、アクセス制御、ログ記録などです。
     */
    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: 実際のリクエストを発火する前のアクセスチェック。');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: リクエストの時間をログに記録。');
    }
}

function clientCode(subject: Subject) {
    subject.request();
}

console.log('Client: 実際のsubjectでクライアントコードを実行中:');
const realSubject = new RealSubject();
clientCode(realSubject);
console.log("")
console.log('Client: Proxyで同じクライアントコードを実行中:');
const proxy = new SubjectProxy(realSubject);
clientCode(proxy);
