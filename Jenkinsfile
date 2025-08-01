pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = 'myfullstackapp'
  }

  options {
    timestamps()
    skipStagesAfterUnstable()
  }

  stages {

    stage('Clean Workspace') {
      steps {
        echo '🧹 Cleaning workspace...'
        deleteDir()
      }
    }

    stage('Checkout Code') {
      steps {
        echo '📥 Cloning repository...'
        git branch: 'main', url: 'https://github.com/asriemok/my-fullstack-app.git'
        // If using a private repo, add: credentialsId: 'your-credentials-id'
      }
    }

    stage('Build & Run Docker Compose') {
      steps {
        echo '🐳 Building and starting containers...'
        sh '''
          docker-compose down || true
          docker-compose up -d --build
        '''
      }
    }

  }

  post {
    always {
      echo '📦 Pipeline finished.'
    }
  }
}
