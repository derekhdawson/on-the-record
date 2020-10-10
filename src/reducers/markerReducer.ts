import { ADD_MARKER, MarkerAction } from '../actions/markerActions';

export interface MarkerState {
  markers: number[];
}

const initialState: MarkerState = {
  markers: [],
};

export default function markerReducer(
  state: MarkerState = initialState,
  action: MarkerAction,
): MarkerState {
  const newState = { ...state };
  switch (action.type) {
    case ADD_MARKER:
      const newMarkerId = state.markers.length;
      const newMarkers = [...state.markers, newMarkerId];
      newState.markers = newMarkers;
      return newState;
    default:
      return newState;
  }
}
