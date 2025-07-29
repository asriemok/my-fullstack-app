pipeline {
  agent any

  environment {
    COMPOSE_PROJECT_NAME = 'myfullstackapp'
  }

  options {
    skipStagesAfterUnstable()
    timestamps()
  }

  stages {
    stage('Workspace Cleanup') {
      steps {
        echo '🧹 Cleaning old workspace...'
        deleteDir()
      }
    }

    stage('Checkout Code') {
      steps {
        echo '📥 Cloning repository...'
        checkout([$class: 'GitSCM',
          branches: [[name: '*/main']],
          userRemoteConfigs: [[
            url: 'https://github.com/asriemok/my-fullstack-app.git'
            // credentialsId: 'your-credentials-id' // Uncomment if using private repo
          ]]
        ])
      }
    }

    stage('Build and Run Docker Compose') {
      steps {
        script {
          echo '🛠️ Building and starting Docker containers...'
          sh 'docker-compose down || true'
          sh 'docker-compose up -d --build'
        }
      }
    }

    stage('Verify Containers') {
      steps {
        echo '🔍 Verifying running containers...'
        sh 'docker ps -a'
      }
    }
  }

  post {
    success {
      echo '✅ Deployment successful!'
    }
    failure {
      echo '❌ Build or deployment failed.'
    }
    always {
      echo '🧹 Shutting down containers...'
      sh 'docker-compose down || true'
    }
  }
}
