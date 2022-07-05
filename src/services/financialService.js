
async function reduceFinancialSum(id){
    const events = financialRepository.getFinancialsEventsByUserId(id);
    if(!events) {
        throw {type: "notFound", message: "events not found!"}
    }

    const sum = events.row.reduce(
        (total, event) =>
          event.type === "INCOME" ? total + event.value : total - event.value,
        0
      );

      return(sum);
}

const financialService = {
    reduceFinancialSum
};

export default financialService;