"use client";
import { useState } from "react";
import { ContributorItem } from "../molecules/contributions/ContributorItem";
import { Contributor } from "@/types/contributor.types";
import AddNewSkeleton from "../molecules/AddNewCard";
import Button from "../atoms/Button";

export function ContributorForm() {
  const [contributors, setContributors] = useState<Contributor[]>([
    {
      person_name: "",
      contribution: [],
    }
  ]);

  const handleAddContributor = () => {
    setContributors([
      ...contributors,
      {
        person_name: "",
        contribution: [],
      },
    ]);
  };

  const handleAddContribution = (contributorIndex: number) => {
    setContributors((prevContributors) => {
      const updatedContributors = [...prevContributors];
      updatedContributors[contributorIndex] = {
        ...updatedContributors[contributorIndex],
        contribution: [
          ...updatedContributors[contributorIndex].contribution,
          {
            name: "",
            contribution_value: {
              initial: 0,
              monthly: { value: 0, interest_rate: 0 },
            },
          },
        ],
      };
      return updatedContributors;
    });
  };

  const handleChangeContributor = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedContributors = [...contributors];
    updatedContributors[index] = {
      ...updatedContributors[index],
      person_name: e.target.value,
    };
    setContributors(updatedContributors);
  };

  const handleChangeContribution = (
    e: React.ChangeEvent<HTMLInputElement>,
    contributorIndex: number,
    contributionIndex: number,
    field: "name" | "initial" | "monthly_value" | "interest_rate"
  ) => {
    setContributors((prevContributors) => {
      const updatedContributors = [...prevContributors];
      const contribution = {
        ...updatedContributors[contributorIndex].contribution[
        contributionIndex
        ],
      };

      switch (field) {
        case "name":
          contribution.name = e.target.value;
          break;
        case "initial":
          contribution.contribution_value.initial = Number(e.target.value);
          break;
        case "monthly_value":
          contribution.contribution_value.monthly.value = Number(
            e.target.value
          );
          break;
        case "interest_rate":
          contribution.contribution_value.monthly.interest_rate = Number(
            e.target.value
          );
          break;
      }

      updatedContributors[contributorIndex].contribution[contributionIndex] =
        contribution;
      return updatedContributors;
    });
  };

  const handleRemoveContributor = (contributorIndex: number) => {
    setContributors((prevContributors) => {
      const updatedContributors = [...prevContributors];
      updatedContributors.splice(contributorIndex, 1);
      return updatedContributors;
    });
  };

  const handleRemoveContribution = (
    contributorIndex: number,
    contributionIndex: number
  ) => {
    setContributors((prevContributors) => {
      const updatedContributors = [...prevContributors];
      updatedContributors[contributorIndex].contribution.splice(
        contributionIndex,
        1
      );
      return updatedContributors;
    });
  };

  const handleSave = () => {
    console.log(contributors);
  }

  return (
    <div className="w-screen">
      <div className="flex gap-4 mb-4 overflow-x-auto pb-4">
        {contributors.map((contributor, contributorIndex) => (
          <div className="shrink-0" key={contributorIndex}>
            <ContributorItem
              contributor={contributor}
              contributorIndex={contributorIndex}
              onContributorChange={handleChangeContributor}
              onAddContribution={handleAddContribution}
              onContributionChange={handleChangeContribution}
              onRemoveContributor={handleRemoveContributor}
              onRemoveContribution={handleRemoveContribution}
            />
          </div>
        ))}
        <AddNewSkeleton handleAdd={handleAddContributor} />
      </div>
      <Button variant="primary" size="md" textAlign="center" onClick={() => handleSave()}>Salvar</Button>
    </div>
  );
}
