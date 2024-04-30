export const selectFamilyMemberNames = (state) => {
  const { familyMembers } = state;

  const names = Object.entries(familyMembers).map(([key, value]) => key);

  return {
    names,
  };
};

export const selectSalaries = (state) => {
  const salaries = Object.entries(state.familyMembers).map(([key, value]) => ({ name: key, netSalary: value.netSalary }))

  return salaries;
};

export const selectFamilyMember = (state) => {
  const { familyMembers, selectedFamilyMember } = state;

  const name = selectedFamilyMember;
  const member = familyMembers[selectedFamilyMember];

  return {
    name,
    member,
  };
};
