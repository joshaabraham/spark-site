export const apiRoutes = {
  subscriptions: {
      listCreate: '/subscriptions/',
      detail: (id: number): string => `/subscriptions/${id}/`
    },
    payments: {
      listCreate: '/payments/',
      detail: (id: number): string => `/payments/${id}/`,
      createPayment: '/create-payment/',
      createPayout: '/create-payout/',
      createTransfer: '/create-transfer/',
      processAutomaticPayments: '/process-automatic-payments/',
    },
    academyApp: {
      schoolCreateList: 'Schools/schoolCreateList/',
      schoolDetail: (pk: number): string => `Schools/school/${pk}/`,
      teacherCreateList: 'Teachers/teacherCreateList/',
      teacherDetail: (pk: number): string => `/Teachers/teacher/${pk}/`,
      studentCreateList: 'Students/studentCreateList/',
      studentDetail: (pk: number): string => `Students/student/${pk}/`,
      courseCreateList: 'Courses/courseCreateList/',
      courseDetail: (pk: number): string => `Courses/course/${pk}/`,
      sectionCreateList: 'Sections/sectionCreateList/',
      sectionDetail: (pk: number): string => `/Sections/section/${pk}/`,
      chapterCreateList: 'Chapters/chapterCreateList/',
      chapterDetail: (pk: number): string => `/Chapters/chapter/${pk}/`,
    },
    associationApp: {
      membersCreateList: 'Members/membersCreateList/',
      memberDetail: (pk: number): string => `Members/member/${pk}/`,
      sportEventsCreateList: 'Sport_events/sport_eventsCreateList/',
      sportEventDetail: (pk: number): string => `Sport_events/sport_event/${pk}/`,
      promotionCreateList: 'Promotions/promotionCreateList/',
      promotionDetail: (pk: number): string => `Promotions/promotion/${pk}/`,
      subscriptionsAssocCreateList: 'SubscriptionsAssoc/subscriptionsAssocCreateList/',
      subscriptionAssocDetail: (pk: number): string => `SubscriptionsAssoc/subscriptionAssoc/${pk}/`,
    },
    associationConfigurationApp: {
      sportsAssociationConfigurationsCreateList: 'scc/sports_association_configurationsCreateList/',
      sportsAssociationConfigurationDetail: (pk: number): string => `scc/sports_association_configuration/${pk}/`,
    },
    chatApp: {
        // Chats
        chatsCreateList: 'chats/', // Liste et création de chats
        chatDetail: (pk: number): string => `chats/${pk}/`, // Détail, mise à jour et suppression d'un chat
        // Messages
        messagesCreateList: (chatId: number): string => `chats/${chatId}/messages/`, // Liste et création de messages pour un chat spécifique
        messageDetail: (pk: number): string => `messages/${pk}/`, // Détail, mise à jour et suppression d'un message
        // Group Invitations
        groupInvitationsCreateList: 'group-invitations/', // Liste et création d'invitations de groupe
        groupInvitationDetail: (pk: number): string => `group-invitations/${pk}/`, // Détail, mise à jour et suppression d'une invitation de groupe
        // Mark message as read
        markMessageAsRead: (pk: number): string => `messages/${pk}/mark-as-read/`, // Marquer un message comme lu
    },
    comportementApp: {
      userActionCreate: 'useractions/useractionCreate/',
      userActionDetail: (pk: number): string => `useractions/useraction/${pk}/`,
    },
    contactApp: {
      contactCreateList: 'contact_app/contactCreateList/',
      contactDetail: (id: number): string => `contact_app/contact/${id}/`,
    },
    ecommerce: {
      categoriesCreateList: 'market/categoriesCreateList/',
      categoryDetail: (pk: number): string => `market/categorie/${pk}/`,
      productsCreateList: 'market/productsCreateList/',
      productDetail: (pk: number): string => `market/product/${pk}/`,
      customersCreateList: 'market/customersCreateList/',
      customerDetail: (pk: number): string => `market/customer/${pk}/`,
      ordersCreateList: 'market/ordersCreateList/',
      orderDetail: (pk: number): string => `market/order/${pk}/`,
      orderItemsCreateList: 'market/orderitemsCreateList/',
    },
    playerApp: {
      // Liste et création de joueurs
      playersCreateList: '/players/players/',
      // Détail, mise à jour et suppression d'un joueur
      playerDetail: (pk: number): string => `/players/players/${pk}/`,
    },
    emploiApp: {
      jobOffersCreateList: 'employment_app/job_offersCreateList/',
      jobOfferDetail: (pk: number): string => `employment_app/job_offer/${pk}/`,
      jobSearchesCreateList: 'employment_app/job_searchesCreateList/',
      jobSearchDetail: (pk: number): string => `employment_app/job_search/${pk}/`,
      jobOpportunitiesListCreate: 'job-opportunities/',
      jobOpportunitiesDetail: (id: number): string => `job-opportunities/${id}/`,
      requiredSkillsListCreate: 'required-skills/',
      requiredSkillsDetail: (id: number): string => `required-skills/${id}/`,
      requiredLanguagesListCreate: 'required-languages/',
      requiredLanguagesDetail: (id: number): string => `required-languages/${id}/`,
      jobApplicationsListCreate: 'job-applications/',
      jobApplicationsDetail: (id: number): string => `job-applications/${id}/`,
    },
    equipeApp: {
        teamsCreateList:  'team_app/teams/',
        teamDetail: (id: string): string => `team_app/teams/${id}/`,
        teamsBySport: (sportId: string): string => `team_app/teamsBySport/${sportId}/`,
        teamsBySponsorship: (sponsorshipId: string): string => `team_app/teamsBySponsorship/${sponsorshipId}/`,
        teamsByFinancialRecord: (financialRecordId: string): string => `team_app/teamsByFinancialRecord/${financialRecordId}/`,
        teamsByTeamHistory: (teamHistoryId: string): string => `team_app/teamsByTeamHistory/${teamHistoryId}/`,
        teamsByMatch: (matchId: string): string => `team_app/teamsByMatch/${matchId}/`
    },
    invitationApp: {
        proposedDatesCreateList: 'invitation_app/proposed-dates/',
        proposedDateDetail: (pk: number): string => `invitation_app/proposed-dates/${pk}/`,
        invitationCreateList: 'invitation_app/invitation/',
        invitationDetail: (pk: number): string => `invitation_app/invitation/${pk}/`,
        invitationNotesCreateList: 'invitation_app/invitation-notes/',
        invitationNoteDetail: (pk: number): string => `invitation_app/invitation-notes/${pk}/`,
    },
    localisationApp: {
      addressesCreateList: 'localisation_app/addresses/',
      addressDetail: (pk: number): string => `localisation_app/addresses/${pk}/`,
    },
    postAndCommentApp: {
      postsCreateList: 'blog_app/posts/',
      postDetail: (pk: number): string => `blog_app/posts/${pk}/`,
      commentsCreateList: 'blog_app/comments/',
      commentDetail: (pk: number): string => `blog_app/comments/${pk}/`,
    },
    profileApp: {
      profilesCreateList: 'profile_app/profiles/',
      profileDetail: (pk: number): string => `profile_app/profile/${pk}/`,
    },
    publiciteApp: {
      campagnesCreateList: 'advert_app/campagnes/',
      campagneDetail: (pk: number): string => `advert_app/campagnes/${pk}/`,
      publicitesCreateList: 'advert_app/publicites/',
      publiciteDetail: (pk: number): string => `advert_app/publicites/${pk}/`,
      controleAudienceCreateList: 'advert_app/controle-audience/',
      controleAudienceDetail: (pk: number): string => `advert_app/controle-audience/${pk}/`,
      budgetEtCalendrierCreateList: 'advert_app/budget-et-calendrier/',
      budgetEtCalendrierDetail: (pk: number): string => `advert_app/budget-et-calendrier/${pk}/`,
      pageFacebookCreateList: 'advert_app/page-facebook/',
      pageFacebookDetail: (pk: number): string => `advert_app/page-facebook/${pk}/`,
      budgetCampagneCreateList: 'advert_app/budget-campagne/',
      budgetCampagneDetail: (pk: number): string => `advert_app/budget-campagne/${pk}/`,
    },
    qrCodesApp: {
      qrCodesCreateList: 'codes_app/qr_codes/',
      qrCodeDetail: (pk: number): string => `codes_app/qr_codes/${pk}/`,
      qrCodeImage: (pk: number): string => `codes_app/qr_codes/${pk}/image/`,
    },
    sportApp: {
      sportCreate: 'sport_app/sportCreate/',
      sportDetail: (pk: number): string => `sport_app/sport/${pk}/`,
      sportList: 'sport_app/sport/list/',
    },
    userApp: {
      register: '/user_app/register',
      login: '/user_app/login',
      user: '/user_app/user',
      logout: '/user_app/logout',
    },
    userConfig: {
      userConfigurationsCreateList: 'user_config/user_configurations/',
      userConfigurationDetail: (pk: number): string => `user_config/user_configurations/${pk}/`,
    },
  };
