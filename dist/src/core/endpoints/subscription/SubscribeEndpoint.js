export const PATH = '/subscription/subscribe';
/**
 * Builds a `/subscription/subscribe` endpoint payload.
 * @param options - The options to use.
 * @returns The payload.
 */
export function build(options) {
    return {
        channelIds: options.channel_ids,
        ...{
            client: options.client,
            params: options.params
        }
    };
}
