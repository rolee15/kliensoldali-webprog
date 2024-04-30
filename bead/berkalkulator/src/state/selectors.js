export const selectFamilyMemberNames = (state) => {
  const { familyMembers } = state;

  const names = Object.entries(familyMembers).map(([key, value]) => key);

  return {
    names,
  };
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
