// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.28.0
// source: youtube/api/pfiinnertube/player_request.proto
/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { InnerTubeContext } from "./innertube_context.js";
import { PlaybackContext } from "./playback_context.js";
import { PlayerAttestationRequestData } from "./player_attestation_request_data.js";
import { PlayerRequestCaptionParams } from "./player_request_caption_params.js";
import { ServiceIntegrityDimensions } from "./service_integrity_dimensions.js";
export const protobufPackage = "youtube.api.pfiinnertube";
function createBasePlayerRequest() {
    return {
        context: undefined,
        videoId: undefined,
        contentCheckOk: undefined,
        playbackContext: undefined,
        racyCheckOk: undefined,
        id: undefined,
        t: undefined,
        forOffline: undefined,
        playlistId: undefined,
        playlistIndex: undefined,
        startTimeSecs: undefined,
        params: undefined,
        offlineSharingWrappedKey: undefined,
        attestationRequest: undefined,
        referringApp: undefined,
        referrer: undefined,
        serializedThirdPartyEmbedConfig: undefined,
        proxiedByOnesie: undefined,
        hostAppToken: undefined,
        cpn: undefined,
        overrideMutedAtStart: undefined,
        captionParams: undefined,
        serviceIntegrityDimensions: undefined,
        deferredPlayerToken: undefined,
    };
}
export const PlayerRequest = {
    encode(message, writer = new BinaryWriter()) {
        if (message.context !== undefined) {
            InnerTubeContext.encode(message.context, writer.uint32(10).fork()).join();
        }
        if (message.videoId !== undefined) {
            writer.uint32(18).string(message.videoId);
        }
        if (message.contentCheckOk !== undefined) {
            writer.uint32(24).bool(message.contentCheckOk);
        }
        if (message.playbackContext !== undefined) {
            PlaybackContext.encode(message.playbackContext, writer.uint32(34).fork()).join();
        }
        if (message.racyCheckOk !== undefined) {
            writer.uint32(40).bool(message.racyCheckOk);
        }
        if (message.id !== undefined) {
            writer.uint32(50).string(message.id);
        }
        if (message.t !== undefined) {
            writer.uint32(58).string(message.t);
        }
        if (message.forOffline !== undefined) {
            writer.uint32(64).bool(message.forOffline);
        }
        if (message.playlistId !== undefined) {
            writer.uint32(74).string(message.playlistId);
        }
        if (message.playlistIndex !== undefined) {
            writer.uint32(80).int32(message.playlistIndex);
        }
        if (message.startTimeSecs !== undefined) {
            writer.uint32(88).uint32(message.startTimeSecs);
        }
        if (message.params !== undefined) {
            writer.uint32(98).string(message.params);
        }
        if (message.offlineSharingWrappedKey !== undefined) {
            writer.uint32(114).bytes(message.offlineSharingWrappedKey);
        }
        if (message.attestationRequest !== undefined) {
            PlayerAttestationRequestData.encode(message.attestationRequest, writer.uint32(130).fork()).join();
        }
        if (message.referringApp !== undefined) {
            writer.uint32(138).string(message.referringApp);
        }
        if (message.referrer !== undefined) {
            writer.uint32(146).string(message.referrer);
        }
        if (message.serializedThirdPartyEmbedConfig !== undefined) {
            writer.uint32(154).string(message.serializedThirdPartyEmbedConfig);
        }
        if (message.proxiedByOnesie !== undefined) {
            writer.uint32(160).bool(message.proxiedByOnesie);
        }
        if (message.hostAppToken !== undefined) {
            writer.uint32(178).string(message.hostAppToken);
        }
        if (message.cpn !== undefined) {
            writer.uint32(186).string(message.cpn);
        }
        if (message.overrideMutedAtStart !== undefined) {
            writer.uint32(200).bool(message.overrideMutedAtStart);
        }
        if (message.captionParams !== undefined) {
            PlayerRequestCaptionParams.encode(message.captionParams, writer.uint32(210).fork()).join();
        }
        if (message.serviceIntegrityDimensions !== undefined) {
            ServiceIntegrityDimensions.encode(message.serviceIntegrityDimensions, writer.uint32(218).fork()).join();
        }
        if (message.deferredPlayerToken !== undefined) {
            writer.uint32(234).bytes(message.deferredPlayerToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlayerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.context = InnerTubeContext.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.videoId = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.contentCheckOk = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.playbackContext = PlaybackContext.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.racyCheckOk = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.t = reader.string();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.forOffline = reader.bool();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.playlistId = reader.string();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.playlistIndex = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.startTimeSecs = reader.uint32();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.params = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.offlineSharingWrappedKey = reader.bytes();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.attestationRequest = PlayerAttestationRequestData.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.referringApp = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.referrer = reader.string();
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.serializedThirdPartyEmbedConfig = reader.string();
                    continue;
                case 20:
                    if (tag !== 160) {
                        break;
                    }
                    message.proxiedByOnesie = reader.bool();
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.hostAppToken = reader.string();
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.cpn = reader.string();
                    continue;
                case 25:
                    if (tag !== 200) {
                        break;
                    }
                    message.overrideMutedAtStart = reader.bool();
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.captionParams = PlayerRequestCaptionParams.decode(reader, reader.uint32());
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.serviceIntegrityDimensions = ServiceIntegrityDimensions.decode(reader, reader.uint32());
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }
                    message.deferredPlayerToken = reader.bytes();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
};
