// webOS 5 K6HP video compatibility.
//
// Firefox ESR 153 selects VP9 MSE on Linux by default. On this ARMv7 TV the
// Firefox media stack has no Starfish/VA-API hardware decoder, so VP9 is
// decoded on the four Cortex-A55 CPU cores. Prefer the H.264/AAC MP4 path
// exposed by the bundled/system FFmpeg instead. Keep WebM enabled for
// non-VP9 media; AV1 is disabled separately in 00-webos.js.
//
// This is a software-decoder fallback, NOT hardware acceleration. The
// native Starfish pipeline integration remains a separate backend project.
pref("media.mediasource.vp9.enabled", false);
