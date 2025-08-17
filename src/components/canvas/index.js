import EarthCanvas from "./Earth";
import BallCanvas from "./Ball";
import ComputersCanvas from "./Computers";
import StarsCanvas from "./Stars";
import LazySplineModel from "./LazySplineModel";

// Export the optimized lazy-loaded model as the default SplineModel
// This way we don't need to update other components using SplineModel
export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas, LazySplineModel as SplineModel };
