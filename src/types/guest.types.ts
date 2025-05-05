export type GuestGroupDTO = {
  type: "FAMILY" | "FRIEND";
  people_by_level: {
    level: number;
    people: {
      name: string;
      isChild: boolean;
      probably_give_up: boolean;
    }[];
  }[];
};
