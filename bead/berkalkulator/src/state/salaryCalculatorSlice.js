import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  familyMembers: {
    Bendi: {
      grossSalary: 250000,
      netSalary: 166250,
      taxCredits: {
        under25: false,
        newlyWed: true,
        disability: false,
        children: 3,
        childrenEligible: 1,
      },
    },
    Bogdán: {
      grossSalary: 350000,
      netSalary: 232750,
      taxCredits: {
        under25: true,
        newlyWed: false,
        disability: true,
        children: 0,
        childrenEligible: 0,
      },
    },
  },
  selectedFamilyMember: "Bendi",
};

const salaryCalculatorSlice = createSlice({
  name: "salaryCalculator",
  initialState,
  reducers: {
    addFamilyMember: (state) => {
      return {
        familyMembers: {
          ...state.familyMembers,
          "": {
            grossSalary: 0,
            taxCredits: {
              under25: false,
              newlyWed: false,
              disability: false,
              children: 0,
              childrenEligible: 0,
            },
          },
        },
        selectedFamilyMember: "",
      };
    },
    updateFamilyMember: (state, { payload }) => {
      const { grossSalary, taxCredits } = payload;
      const { under25, newlyWed, disability, children, childrenEligible } = taxCredits;
      const netSalary = calculateNetSalary(grossSalary, taxCredits);

      return {
        ...state,
        familyMembers: {
          ...state.familyMembers,
          [state.selectedFamilyMember]: {
            grossSalary: grossSalary,
            netSalary: netSalary,
            taxCredits: {
              under25: under25,
              newlyWed: newlyWed,
              disability: disability,
              children: children,
              childrenEligible: childrenEligible,
            },
          },
        },
      };
    },
    updateFamilyMemberName: (state, { payload: { name } }) => {
      const selected = state.selectedFamilyMember;
      let { [selected]: member, ...rest } = state.familyMembers;

      return {
        familyMembers: { ...rest, [name]: member },
        selectedFamilyMember: name,
      };
    },
    deleteFamilyMember: (state, { payload: { name } }) => {
      let { [name]: _, ...rest } = state.familyMembers;
      const restMembers = Object.keys(rest);
      let selected = restMembers.length > 0 ? restMembers[restMembers.length - 1] : "";

      return {
        familyMembers: rest,
        selectedFamilyMember: selected,
      };
    },
    selectedFamilyMember: (state, { payload: { name } }) => {
      return {
        ...state,
        selectedFamilyMember: name,
      };
    },
  },
});

const calculateNetSalary = (grossSalary, taxCredits) => {
  return grossSalary * 0.665;
};

export const { addFamilyMember, updateFamilyMember, updateFamilyMemberName, deleteFamilyMember, selectedFamilyMember } =
  salaryCalculatorSlice.actions;
export default salaryCalculatorSlice;
