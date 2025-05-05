"use client";
import React from "react";
import Input from "@/components/atoms/Input";
import { ContributionItem } from "./ContributionItem";
import { Contributor } from "@/types/contributor.types";
import Button from "@/components/atoms/Button";
import RemoveIcon from "@/components/atoms/icons/RemoveIcon";

type ContributorItemProps = {
  contributor: Contributor;
  contributorIndex: number;
  onContributorChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onAddContribution: (contributorIndex: number) => void;
  onContributionChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    contributorIndex: number,
    contributionIndex: number,
    field: 'name' | 'initial' | 'monthly_value' | 'interest_rate'
  ) => void;
  onRemoveContributor: (contributorIndex: number) => void;
  onRemoveContribution: (contributorIndex: number, contributionIndex: number) => void;
  className?: string;
};

export function ContributorItem({
  contributor,
  contributorIndex,
  onContributorChange,
  onAddContribution,
  onContributionChange,
  onRemoveContributor,
  onRemoveContribution,
  className = ""
}: ContributorItemProps) {
  return (
    <div className={`w-md bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden relative ${className}`}>
      <Button
        variant="icon"
        size="sm"
        onClick={() => onRemoveContributor(contributorIndex)}
        aria-label="Remover contribuidor"
        className="absolute top-3 right-3"
        icon={
          <RemoveIcon width={16} height={16} className="text-gray-500" />
        }
      />

      <div className="p-6">
        <Input
          label="Nome do Contribuidor"
          placeholder="Nome do Contribuidor"
          value={contributor.person_name}
          type="text"
          handleChange={(e) => onContributorChange(e, contributorIndex)}
        />

        <div className="mt-6">
          <h3 className="text-base font-medium text-gray-800 mb-4">Contribuições</h3>

          {contributor.contribution.map((contribution, contributionIndex) => (
            <ContributionItem
              key={contributionIndex}
              contribution={contribution}
              contributorIndex={contributorIndex}
              contributionIndex={contributionIndex}
              onContributionChange={onContributionChange}
              onRemoveContribution={onRemoveContribution}
            />
          ))}

          <Button
            variant="secondary"
            size="inherit"
            onClick={() => onAddContribution(contributorIndex)}
          >
            Adicionar Contribuição
          </Button>
        </div>
      </div>
    </div>
  );
} 