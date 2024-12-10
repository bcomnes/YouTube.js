import Feed from '../../core/mixins/Feed.js';
import C4TabbedHeader from '../classes/C4TabbedHeader.js';
import ItemSection from '../classes/ItemSection.js';
import { ItemSectionContinuation } from '../index.js';
export default class Channel extends Feed {
    constructor(actions, data, already_parsed = false) {
        super(actions, data, already_parsed);
        this.header = this.page.header?.item().as(C4TabbedHeader);
        this.contents = this.memo.getType(ItemSection).first() || this.page.continuation_contents?.as(ItemSectionContinuation);
    }
    /**
     * Retrieves next batch of videos.
     */
    async getContinuation() {
        const response = await this.actions.execute('/browse', {
            continuation: this.contents?.continuation,
            client: 'YTKIDS'
        });
        return new Channel(this.actions, response);
    }
    get has_continuation() {
        return !!this.contents?.continuation;
    }
}
