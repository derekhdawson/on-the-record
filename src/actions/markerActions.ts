export const ADD_MARKER = 'marker/ADD_MARKER';

interface AddMarkerAction {
  type: typeof ADD_MARKER;
}

export const addMarker = (): AddMarkerAction => ({
  type: ADD_MARKER,
});

export type MarkerAction = AddMarkerAction;
