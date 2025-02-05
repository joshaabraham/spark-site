export const apiRoutes = {
    abonnementApp: {
      subscriptionCreateList: '/Subscriptions/subscriptionCreateList/',
      subscriptionDetail: (pk: number): string => `/Subscriptions/subscription/${pk}/`,
      paymentCreateList: '/Subscriptions/paymentCreateList/',
      paymentDetail: (pk: number): string => `/Subscriptions/payment/${pk}/`,
    },
    academyApp: {
      schoolCreateList: '/Schools/schoolCreateList/',
      schoolDetail: (pk: number): string => `/Schools/school/${pk}/`,
      teacherCreateList: '/Teachers/teacherCreateList/',
      teacherDetail: (pk: number): string => `/Teachers/teacher/${pk}/`,
      studentCreateList: '/Students/studentCreateList/',
      studentDetail: (pk: number): string => `/Students/student/${pk}/`,
      courseCreateList: '/Courses/courseCreateList/',
      courseDetail: (pk: number): string => `/Courses/course/${pk}/`,
      sectionCreateList: '/Sections/sectionCreateList/',
      sectionDetail: (pk: number): string => `/Sections/section/${pk}/`,
      chapterCreateList: '/Chapters/chapterCreateList/',
      chapterDetail: (pk: number): string => `/Chapters/chapter/${pk}/`,
    },
    associationApp: {
      membersCreateList: '/Members/membersCreateList/',
      memberDetail: (pk: number): string => `/Members/member/${pk}/`,
      sportEventsCreateList: '/Sport_events/sport_eventsCreateList/',
      sportEventDetail: (pk: number): string => `/Sport_events/sport_event/${pk}/`,
      promotionCreateList: '/Promotions/promotionCreateList/',
      promotionDetail: (pk: number): string => `/Promotions/promotion/${pk}/`,
      subscriptionsAssocCreateList: '/SubscriptionsAssoc/subscriptionsAssocCreateList/',
      subscriptionAssocDetail: (pk: number): string => `/SubscriptionsAssoc/subscriptionAssoc/${pk}/`,
    },
    associationConfigurationApp: {
      sportsAssociationConfigurationsCreateList: '/scc/sports_association_configurationsCreateList/',
      sportsAssociationConfigurationDetail: (pk: number): string => `/scc/sports_association_configuration/${pk}/`,
    },
    chatApp: {
      chatsCreateList: '/chats/chatsCreateList/',
      chatDetail: (pk: number): string => `/chats/chat/${pk}/`,
      messagesCreateList: '/chats/messagesCreateList/',
    },
    comportementApp: {
      userActionCreate: '/useractions/useractionCreate/',
      userActionDetail: (pk: number): string => `/useractions/useraction/${pk}/`,
    },
    contactApp: {
      contactCreateList: '/contact_app/contactCreateList/',
      contactDetail: (pk: number): string => `/contact_app/contact/${pk}/`,
    },
    ecommerce: {
      categoriesCreateList: '/market/categoriesCreateList/',
      categoryDetail: (pk: number): string => `/market/categorie/${pk}/`,
      productsCreateList: '/market/productsCreateList/',
      productDetail: (pk: number): string => `/market/product/${pk}/`,
      customersCreateList: '/market/customersCreateList/',
      customerDetail: (pk: number): string => `/market/customer/${pk}/`,
      ordersCreateList: '/market/ordersCreateList/',
      orderDetail: (pk: number): string => `/market/order/${pk}/`,
      orderItemsCreateList: '/market/orderitemsCreateList/',
    },
    emploiApp: {
      jobOffersCreateList: '/employment_app/job_offersCreateList/',
      jobOfferDetail: (pk: number): string => `/employment_app/job_offer/${pk}/`,
      jobSearchesCreateList: '/employment_app/job_searchesCreateList/',
      jobSearchDetail: (pk: number): string => `/employment_app/job_search/${pk}/`,
    },
    equipeApp: {
        teamsCreateList: 'team_app/teamsCreateList/',
        teamDetail: (id: string): string => `team_app/team/${id}/`,
        teamsBySport: (sportId: string): string => `team_app/teamsBySport/${sportId}/`,
        teamsBySponsorship: (sponsorshipId: string): string => `team_app/teamsBySponsorship/${sponsorshipId}/`,
        teamsByFinancialRecord: (financialRecordId: string): string => `team_app/teamsByFinancialRecord/${financialRecordId}/`,
        teamsByTeamHistory: (teamHistoryId: string): string => `team_app/teamsByTeamHistory/${teamHistoryId}/`,
        teamsByMatch: (matchId: string): string => `team_app/teamsByMatch/${matchId}/`
    },
    invitationApp: {
        invitationCreateList: '/invitationCreate/',
        invitationDetail: (pk: number): string => `/invitation/${pk}/`,
    },
    localisationApp: {
      addressesCreateList: '/localisation_app/addresses/',
      addressDetail: (pk: number): string => `/localisation_app/addresses/${pk}/`,
    },
    postAndCommentApp: {
      postsCreateList: '/blog_app/posts/',
      postDetail: (pk: number): string => `/blog_app/posts/${pk}/`,
      commentsCreateList: '/blog_app/comments/',
      commentDetail: (pk: number): string => `/blog_app/comments/${pk}/`,
    },
    profileApp: {
      profilesCreateList: 'profile_app/profiles/',
      profileDetail: 'profile_app/profile/',
    },
    publiciteApp: {
      campagnesCreateList: '/advert_app/campagnes/',
      campagneDetail: (pk: number): string => `/advert_app/campagnes/${pk}/`,
      publicitesCreateList: '/advert_app/publicites/',
      publiciteDetail: (pk: number): string => `/advert_app/publicites/${pk}/`,
      controleAudienceCreateList: '/advert_app/controle-audience/',
      controleAudienceDetail: (pk: number): string => `/advert_app/controle-audience/${pk}/`,
      budgetEtCalendrierCreateList: '/advert_app/budget-et-calendrier/',
      budgetEtCalendrierDetail: (pk: number): string => `/advert_app/budget-et-calendrier/${pk}/`,
      pageFacebookCreateList: '/advert_app/page-facebook/',
      pageFacebookDetail: (pk: number): string => `/advert_app/page-facebook/${pk}/`,
      budgetCampagneCreateList: '/advert_app/budget-campagne/',
      budgetCampagneDetail: (pk: number): string => `/advert_app/budget-campagne/${pk}/`,
    },
    qrCodesApp: {
      qrCodesCreateList: '/codes_app/qr_codes/',
      qrCodeDetail: (pk: number): string => `/codes_app/qr_codes/${pk}/`,
      qrCodeImage: (pk: number): string => `/codes_app/qr_codes/${pk}/image/`,
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
      userConfigurationsCreateList: '/user_config/user_configurations/',
      userConfigurationDetail: (pk: number): string => `/user_config/user_configurations/${pk}/`,
    },
  };
