"use client";
import GroupAddIcon from "@/components/atoms/icons/GroupAddIcon";
import SwitchMenu, { Option } from "@/components/molecules/menu/SwitchMenu";
import { ContributorForm } from "@/components/organisms/ContributorForm";
import InviteListForm from "@/components/organisms/InviteListForm";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

enum VALUES {
  CONTRIBUTION = "Contribuição",
  GUEST_LIST = "Lista de Convidados",
}

const OPTIONS = [
  { value: VALUES.CONTRIBUTION, icon: <GroupAddIcon />, description: "Escolha o tipo de contribuição" },
  { value: VALUES.GUEST_LIST, icon: <GroupAddIcon />, description: "Altere a sua lista de convidados" },
];

export default function Home() {
  const queryClient = new QueryClient();
  const [selectedOption, setSelectedOption] = useState(VALUES.CONTRIBUTION);

  const handleChange = (option: Option<VALUES>) => {
    setSelectedOption(option.value);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid items-center justify-items-center gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col row-start-2 items-center sm:items-start px-3">
          <h1 className="w-full text-left text-4xl font-bold mb-4 text-rose-700">🌹 NupList</h1>
          <SwitchMenu options={OPTIONS} selectedOption={selectedOption} onChange={handleChange} />
          {selectedOption === VALUES.CONTRIBUTION && <ContributorForm />}
          {selectedOption === VALUES.GUEST_LIST && <InviteListForm />}
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        </footer>
      </div>
    </QueryClientProvider>
  );
}
