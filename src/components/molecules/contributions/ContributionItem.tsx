"use client";
import React from "react";
import Input from "@/components/atoms/Input";
import { Contribution } from "@/types/contributor.types";
import Button from "@/components/atoms/Button";
import RemoveIcon from "@/components/atoms/icons/RemoveIcon";

type ContributionProps = {
  contribution: Contribution;
  contributorIndex: number;
  contributionIndex: number;
  onContributionChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    contributorIndex: number,
    contributionIndex: number,
    field: 'name' | 'initial' | 'monthly_value' | 'interest_rate'
  ) => void;
  onRemoveContribution: (contributorIndex: number, contributionIndex: number) => void;
};

export function ContributionItem({
  contribution,
  contributorIndex,
  contributionIndex,
  onContributionChange,
  onRemoveContribution
}: ContributionProps) {
  return (
    <div className="mb-4 pt-4 pb-2 border-b border-gray-100 relative">
      <Button
        variant="icon"
        size="sm"
        onClick={() => onRemoveContribution(contributorIndex, contributionIndex)}
        aria-label="Remover contribuidor"
        className="absolute top-3 right-0"
        icon={
          <RemoveIcon width={16} height={16} className="text-gray-500" />
        }
      />

      <Input
        label="Nome da Contribuição"
        type="text"
        placeholder="Ex: Presente de Casamento"
        value={contribution.name}
        handleChange={(e) => onContributionChange(e, contributorIndex, contributionIndex, 'name')}
      />

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Input
          label="Valor Inicial"
          type="number"
          placeholder="0"
          value={contribution.contribution_value.initial.toString()}
          handleChange={(e) => onContributionChange(e, contributorIndex, contributionIndex, 'initial')}
        />
        <Input
          label="Valor Mensal"
          type="number"
          placeholder="0"
          value={contribution.contribution_value.monthly.value.toString()}
          handleChange={(e) => onContributionChange(e, contributorIndex, contributionIndex, 'monthly_value')}
        />
        <Input
          label="Taxa de Juros (%)"
          type="number"
          placeholder="0"
          value={contribution.contribution_value.monthly.interest_rate.toString()}
          handleChange={(e) => onContributionChange(e, contributorIndex, contributionIndex, 'interest_rate')}
        />
      </div>
    </div>
  );
} 