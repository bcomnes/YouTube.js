import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import { Log } from '../../utils/index.js';
class ChannelVideoPlayer extends YTNode {
    constructor(data) {
        super();
        this.id = data.videoId;
        this.title = new Text(data.title);
        this.description = new Text(data.description);
        this.view_count = new Text(data.viewCountText);
        this.published_time = new Text(data.publishedTimeText);
    }
    /**
     * @deprecated
     * This will be removed in a future release.
     * Please use {@link ChannelVideoPlayer.view_count} instead.
     */
    get views() {
        Log.warnOnce(ChannelVideoPlayer.type, 'ChannelVideoPlayer#views is deprecated. Please use ChannelVideoPlayer#view_count instead.');
        return this.view_count;
    }
    /**
     * @deprecated
     * This will be removed in a future release.
     * Please use {@link ChannelVideoPlayer.published_time} instead.
     */
    get published() {
        Log.warnOnce(ChannelVideoPlayer.type, 'ChannelVideoPlayer#published is deprecated. Please use ChannelVideoPlayer#published_time instead.');
        return this.published_time;
    }
}
ChannelVideoPlayer.type = 'ChannelVideoPlayer';
export default ChannelVideoPlayer;
