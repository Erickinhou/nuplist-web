import { LEVEL, Person, FamilyGuestGroup, FriendGuestGroup } from "@/components/organisms/InviteListForm";
import { GuestGroupDTO } from "@/types/guest.types";

export const mapToGuestGroupDTO = (
  familyGuestGroup: FamilyGuestGroup,
  friendGuestGroup: FriendGuestGroup
): GuestGroupDTO[] => {
  const mapPeopleByLevel = (people: Person[]): GuestGroupDTO["people_by_level"] => {
    // Agrupa pessoas por nível
    const peopleByLevel = people.reduce<Record<number, Person[]>>((acc, person) => {
      if (!acc[person.level]) {
        acc[person.level] = [];
      }
      acc[person.level].push(person);
      return acc;
    }, {});

    // Converte para o formato esperado pela API
    return Object.entries(peopleByLevel).map(([level, people]) => ({
      level: Number(level),
      people: people.map(person => ({
        name: person.name,
        isChild: person.isChild,
        probably_give_up: person.probably_give_up
      }))
    }));
  };

  const familyGroup: GuestGroupDTO = {
    type: "FAMILY",
    people_by_level: mapPeopleByLevel(familyGuestGroup.people)
  };

  const friendGroup: GuestGroupDTO = {
    type: "FRIEND",
    people_by_level: mapPeopleByLevel(friendGuestGroup.people)
  };

  return [familyGroup, friendGroup];
};

export const mapFromGuestGroupDTO = (
  guestGroups: GuestGroupDTO[]
): { familyGuestGroup: FamilyGuestGroup; friendGuestGroup: FriendGuestGroup } => {
  const familyGroup = guestGroups.find(group => group.type === "FAMILY");
  const friendGroup = guestGroups.find(group => group.type === "FRIEND");

  const mapToPeople = (group?: GuestGroupDTO): Person[] => {
    if (!group) return [];

    return group.people_by_level.flatMap(levelGroup => 
      levelGroup.people.map(person => ({
        name: person.name,
        isChild: person.isChild,
        probably_give_up: person.probably_give_up,
        level: levelGroup.level as LEVEL
      }))
    );
  };

  return {
    familyGuestGroup: {
      type: "FAMILY",
      people: mapToPeople(familyGroup)
    },
    friendGuestGroup: {
      type: "FRIEND",
      people: mapToPeople(friendGroup)
    }
  };
};
