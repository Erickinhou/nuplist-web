import { useState } from "react";
import Button from "@/components/atoms/Button";
import AddNewCard from "../molecules/AddNewCard";
import GuestItem from "../molecules/guest/GuestItem";
import { usePostGuestList } from "@/hooks/useGuest";
import { mapToGuestGroupDTO } from "@/service/guest/guest.map";

// Tipos
export type GuestType = "FAMILY" | "FRIEND";

export enum LEVEL {
  close = 1,
  moderate = 2,
  distant = 3,
};

export type Person = {
  name: string;
  isChild: boolean;
  probably_give_up: boolean;
  level: LEVEL;
};

export type GuestGroup = {
  type: GuestType;
  people: Person[];
};

export type FamilyGuestGroup = {
  type: "FAMILY";
  people: Person[];
};

export type FriendGuestGroup = {
  type: "FRIEND";
  people: Person[];
};

const defaultPerson: Person = {
  name: "",
  isChild: false,
  probably_give_up: false,
  level: LEVEL.distant,
};

const InviteListForm = () => {
  const { mutateAsync } = usePostGuestList();

  const [familyGuestGroup, setFamilyGuestGroup] = useState<FamilyGuestGroup>({
    type: "FAMILY",
    people: [],
  });
  const [friendGuestGroup, setFriendGuestGroup] = useState<FriendGuestGroup>({
    type: "FRIEND",
    people: [],
  });

  const handleAddFamilyGuest = (person: Person) => {
    setFamilyGuestGroup({ ...familyGuestGroup, people: [...familyGuestGroup.people, person] });
  };

  const handleAddFriendGuest = (person: Person) => {
    setFriendGuestGroup({ ...friendGuestGroup, people: [...friendGuestGroup.people, person] });
  };

  const handleRemoveFamilyGuest = (index: number) => {
    setFamilyGuestGroup({ ...familyGuestGroup, people: familyGuestGroup.people.filter((_, i) => i !== index) });
  };

  const handleRemoveFriendGuest = (index: number) => {
    setFriendGuestGroup({ ...friendGuestGroup, people: friendGuestGroup.people.filter((_, i) => i !== index) });
  };

  const handleChangeFamilyGuest = (person: Person, index: number) => {
    setFamilyGuestGroup({ ...familyGuestGroup, people: familyGuestGroup.people.map((p, i) => i === index ? person : p) });
  };

  const handleChangeFriendGuest = (person: Person, index: number) => {
    setFriendGuestGroup({ ...friendGuestGroup, people: friendGuestGroup.people.map((p, i) => i === index ? person : p) });
  };

  const handleSave = async () => {

    const guestGroupsDTO = mapToGuestGroupDTO(familyGuestGroup, friendGuestGroup);


    console.log(guestGroupsDTO);

    try {
      const response = await mutateAsync(guestGroupsDTO);
      if (response.success) {
        console.log("Lista de convidados salva com sucesso:", response.data);
      } else {
        console.error("Erro ao salvar lista de convidados:", response.data);
      }
    } catch (error) {
      console.error("Erro ao processar lista de convidados:", error);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Família</h2>
      <div className="flex w-screen overflow-x-auto pb-2 gap-4">
        {familyGuestGroup.people.map((person, index) => (
          <GuestItem className="shrink-0" key={index} person={person} onChange={(person) => handleChangeFamilyGuest(person, index)} onRemove={() => handleRemoveFamilyGuest(index)} />
        ))}
        <AddNewCard handleAdd={() => handleAddFamilyGuest(defaultPerson)} />
      </div>
      <h2 className="text-2xl font-bold">Amigos</h2>
      <div className="flex w-screen overflow-x-auto pb-2 gap-4">
        {friendGuestGroup.people.map((person, index) => (
          <GuestItem className="shrink-0" key={index} person={person} onChange={(person) => handleChangeFriendGuest(person, index)} onRemove={() => handleRemoveFriendGuest(index)} />
        ))}
        <AddNewCard handleAdd={() => handleAddFriendGuest(defaultPerson)} />
      </div>

      <Button variant="primary" size="md" textAlign="center" onClick={() => handleSave()}>Salvar</Button>
    </div>
  );
};

export default InviteListForm;