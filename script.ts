import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type UserQuery = {
  where:
    | {
        email: string;
      }
    | {
        age_name: {
          age: number;
          name: string;
        };
      };
  select?: {
    name?: boolean;
    age?: boolean;
  };
};

const FindUnique: UserQuery[] = [
  {
    where: {
      email: "carlosdf035@gmail.com",
    },
    select: {
      name: true,
    },
  },
  {
    where: {
      email: "catia@gmail.com",
    },
  },
  {
    where: {
      age_name: {
        age: 19,
        name: "Catia Fernandes",
      },
    },
    select: {
      age: true,
    },
  },
  
];

async function main() {
  /*   
  const user = await prisma.user.findUnique(FindUnique[2]);

  const users = await prisma.user.findMany({
    where: {
      name: "Carlos Fernandes",
    },
    distinct: ["name"], 
  }); */
  ///////////////////////////  CREATE  ///////////////////////////
  /* const criar = await prisma.user.create({
    data: {
      name: "Carlos Fernandes",
      age: 54,
      email: "ze@gmail.com",
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
  }); */
  ///////////////////////////  ORDER, TAKE AND SKIP  ///////////////////////////
  /* const users = await prisma.user.findMany({
    where: {
      name: {
        contains: "Carlos",
      },
    },
    orderBy: {
      age: "desc",
    },
    take: 1,
    skip: 2,
  });

  console.log(users); *
  ///////////////////////////  not  ///////////////////////////

  /* const users = await prisma.user.findMany({
    where: {
      name: {
        not: {
          startsWith: "Carlos",
        },
      },
    },
  });
  console.log(users); */
  ///////////////////////////  IN  ///////////////////////////
  /*   const users = await prisma.user.findMany({
    where: {
      name : {
        in: ["Carlos Fernandes", "Catia Fernandes"],
      }
       
    },
  });
  console.log(users); */
  ///////////////////////////  query relation  ///////////////////////////
  /*   const user = await prisma.user.findMany({
    where: {
      userPreference: {
        NOT: {
          emailUpdates: true,
        },
      },
    },
  }); */
  //// ///////////////////////////  anouther way for not  ///////////////////////////
  /*   const user = await prisma.user.findMany({
    where: {
      userPreference: {
        emailUpdates: {
          not: {
            equals: true,
          },
        },
      },
    },
  });
  console.log(user); */
  ////////////////////////////////////////////////////////////////////////////////////
  /*   const user = await prisma.user.findMany({
    where: {
      writtenPosts: {
        some: {
          rating: { lt: 0 },
        },
      },
    },
  });
  console.log(user); */
  /* 
  Propósito: O método every é utilizado para verificar se todos os registros relacionados em uma coleção (relação) atendem a uma condição específica. 
   Propósito: O método some é utilizado para verificar se pelo menos um dos registros relacionados em uma coleção (relação) atende a uma condição específica.
   */
  ///////////////////////////  IS/ISNOT  ///////////////////////////
  /*  const user = await prisma.post.findMany({
    where: {
      author: {
        is: {
          age: 20,
        },
      },
    },
    include: {
      author: true,
    },
  });
  console.log(user); */
  ///////////////////////////  UPDATE  ///////////////////////////
  /* 
  const user = await prisma.user.update({
    where: {
      email: "catia@gmail.com",
    },
    data: {
      age: {
        increment: 1,
      },
    },
  }); */
  ///////////////////////////  connect a user to a post  ///////////////////////////
  /*   const user = await prisma.user.update({
    where: {
      email: "zezinho@gmail.com",
    },
    data: {
      userPreference: {
        connect: {
          id: "102499",
        },
      },
    },
  });
} */
  ///////////////////////////  disconnect a user to a post  ///////////////////////////
  /*   const user = await prisma.user.update({
    where: {
      email: "zezinho@gmail.com",
    },
    data: {
      userPreference: {
        disconnect: true,
      },
    },
  });
} */
  /////////////////////////// FINDMANY  ///////////////////////////
  /*   const user = await prisma.user.findMany({
    where: {
      name: "Carlos Fernandes",
    },
  });

  console.log(user);
} */
  /* https://www.youtube.com/watch?v=RebA5J-rlwg&t=2264s */
}
main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
