import UIKit
import AudioKit
import AudioKitUI
import MapKit

class WaveformView: UIView {
  
  @objc var count: NSNumber = 0 {
    didSet {
      print(count)
    }
  }
  
  var audioInputPlot: EZAudioPlot!
  var mic: AKMicrophone!
  var tracker: AKFrequencyTracker!
  var silence: AKBooster!

  override init(frame: CGRect) {
    super.init(frame: frame)
    
    AKSettings.audioInputEnabled = true
    mic = AKMicrophone()
    tracker = AKFrequencyTracker(mic)
    silence = AKBooster(tracker, gain: 0)

    AKManager.output = silence
    do {
        try AKManager.start()
        setUpPlot()
    } catch {
        AKLog("AudioKit did not start!")
    }
  }
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  func setUpPlot() {
    let screenWidth = UIScreen.main.bounds.width
    let plotFrame = CGRect(x: 0, y: 0, width: screenWidth, height: 100)
    audioInputPlot = EZAudioPlot(frame: plotFrame)
    audioInputPlot.backgroundColor = UIColor.clear

    let plot = AKNodeOutputPlot(mic, frame: plotFrame)
    plot.plotType = .rolling
    plot.shouldFill = true
    plot.shouldMirror = false
    plot.color = UIColor.red
    plot.backgroundColor = UIColor.clear
    audioInputPlot.addSubview(plot)

    addSubview(audioInputPlot)
  }
}
