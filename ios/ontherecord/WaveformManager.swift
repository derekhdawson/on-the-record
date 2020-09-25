import MapKit

@objc(WaveformManager)
class WaveformManager: RCTViewManager {

    override func view() -> UIView! {
        return WaveformView()
    }

    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
