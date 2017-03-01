import { DiscordStore } from "../store";
export interface IDbSchema {
  description: string,
  run(store: DiscordStore): Promise<null>;
}
