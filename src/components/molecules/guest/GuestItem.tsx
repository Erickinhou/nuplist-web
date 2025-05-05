import Button from '@/components/atoms/Button';
import Checkbox from '@/components/atoms/Checkbox';
import RemoveIcon from '@/components/atoms/icons/RemoveIcon';
import Input from '@/components/atoms/Input'
import Selection from '@/components/atoms/Selection';
import { Person } from '@/components/organisms/InviteListForm';
import React from 'react'

type GuestItemProps = {
  person: Person;
  onRemove: () => void;
  onChange: (person: Person) => void;
  className?: string;
}

const GuestItem = ({ person, onRemove, onChange, className = "" }: GuestItemProps) => {
  return (
    <div className={`w-md bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative ${className}`}>
      <Button
        variant="icon"
        size="sm"
        onClick={onRemove}
        aria-label="Remover convidado"
        className="absolute top-3 right-3"
        icon={
          <RemoveIcon width={16} height={16} className="text-gray-500" />
        }
      />
      <div className="p-6">
        <Input
          label="Nome"
          type="text"
          placeholder="Nome"
          value={person.name}
          handleChange={(e) => onChange({ ...person, name: e.target.value })}
        />
        <Selection
          label="Nível de Interesse"
          selectedValue={person.level.toString()}
          options={[
            { label: "Próximo", value: 1 },
            { label: "Médio", value: 2 },
            { label: "Distante", value: 3 },
          ]}
          onSelect={(value) => {
            console.log(value);
            onChange({ ...person, level: parseInt(value) });
          }}
        />
        <div className="flex flex-col gap-2">
          <Checkbox
            label="Acha que vai comparecer?"
            checked={person.probably_give_up}
            onChange={(e) => onChange({ ...person, probably_give_up: e.target.checked })}
          />
          <Checkbox
            label="É criança?"
            checked={person.isChild}
            onChange={(e) => onChange({ ...person, isChild: e.target.checked })}
          />
        </div>
      </div>
    </div>
  )
}

export default GuestItem