import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "session" model, go to https://gadget-multiplayer.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v1",
  storageKey: "SJoAzCC7P8Du",
  fields: {
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "W0CqIQiWCRVM",
    },
  },
};
